import React from "react";
import "./index.less";
import { Button, Card, Col, Form, Input, Row,message } from "antd";
import { login } from "@/api/api";
import { useMutation } from "@tanstack/react-query";
import { useSelector,useDispatch } from "react-redux";

const Login: React.FC = () => {
  // redux
  const dispatch = useDispatch();
  // form
  const [form] = Form.useForm();
  // 登录
  const { mutate, isLoading: loginLoading } = useMutation(login, {
    onSuccess: (data: any) => {
      if (data?.code === 200) {
        message.success("登录成功");
        // 获取菜单
        dispatch.user.fetchMenu()  
      } else {
        message.error(data?.message);
      }
    },
  });

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
                  <Input />
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
