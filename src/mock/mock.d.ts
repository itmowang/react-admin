export interface MenuParam{
    label: React.ReactNode;
    key: React.Key;
    icon?: React.ReactNode;
    children?: MenuItems[];
    parentId:number
    id:number
    type?: "group";
}