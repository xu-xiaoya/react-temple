import { Input, Form, Button, Modal } from 'antd'

export default function Test() {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log(values)
  }
  const onReset = () => {
    form.resetFields()
  }
  return (
    <>
      <Form 
        form={form} 
        onFinish={onFinish}
      >
        <Form.Item name="oldString" label="oldString">
          <Input/>
        </Form.Item>
        <Form.Item name="newString" label="newString">
          <Input/>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
  