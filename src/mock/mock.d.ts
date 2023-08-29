export interface MenuParam{
    name: ReactNode;
    label: React.ReactNode;
    key: React.Key;
    icon?: React.ReactNode;
    children?: MenuItems[];
    parentId:number
    id:number;
    path:string;
    type?: "group";
}