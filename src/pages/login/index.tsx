import React, { useEffect } from "react";
import "./index.less";
import { Button, Card, Col, Form, Input, Row, message } from "antd";
import { login } from "@/api/api";
import { useMutation } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  // 路由
  const navigate = useNavigate();
  // redux
  const dispatch = useDispatch();
  const userStore = useSelector((state: any) => state.user);

  // form
  const [form] = Form.useForm();
  // 登录
  const { mutate, isLoading: loginLoading } = useMutation(login, {
    onSuccess: (data: any) => {
      if (data?.code === 200) {
        message.success("登录成功");
        // 保存token
        dispatch({
          type: "user/setToken",
          payload: data?.token,
        });
        // 获取菜单
        dispatch.user.fetchMenu();
        // 保存用户信息
        dispatch({
          type: "user/setUser",
          payload: data?.userInfo,
        });
        // 跳转去仪表盘
        navigate("/index");
      } else {
        message.error(data?.message);
      }
    },
  });

  // 如果已经登录就去仪表盘
  useEffect(() => {
    if (userStore.isLogin) {
      navigate("/index");
    }
  }, []);

  const Login = async () => {
    try {
      const values = await form.validateFields();
      mutate(values);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  return (
    <div className="login">
      <Row>
        <Col span={12} offset={6}>
          <div className="login-container">
            <Card style={{ width: "400px" }}>
              <div className="login-title">
                <h1>React Admin</h1>
              </div>
              <Form form={form} autoComplete="off" layout="vertical">
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    style={{ width: "100%" }}
                    onClick={() => Login()}
                    loading={loginLoading}
                  >
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
