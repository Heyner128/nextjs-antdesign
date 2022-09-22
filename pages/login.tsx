import {Col, Row, Card, Input, Button, Form} from 'antd';
import {UserOutlined, EyeTwoTone, EyeInvisibleOutlined, WindowsOutlined} from '@ant-design/icons'


const login:React.FC = () => {

    return <Row justify="end" className=" bg-slate-200 items-center h-[100vh]">
        
        <Col span={10}>
            <Card className="mr-48 h-[80vh] shadow flex flex-col justify-center">
                <p className="text-xl text-center">Login into my page with Azure AD or your credentials</p> 
                <Input placeholder="username" prefix={<UserOutlined />} className="mt-10"/>
                <Input.Password
                placeholder="password"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                className="mt-5"
                />
                <div className="flex flex-col items-center">
                    <Button className="mt-5 w-3/4">Login</Button>
                    <Button className="mt-5 w-3/4" icon={<WindowsOutlined />}>Login with microsoft (Azure AD)</Button>
                </div>
                

            </Card>
        </Col>
    </Row>

}

export default login;