import { Input, Form, Button, Modal } from 'antd'
import { useState } from 'react'

export default function Test() {
  const [form] = Form.useForm()
  const [modal, setModal] = useState({})

  const onFinish = (values) => {
    console.log(values)
    setModal({ type: 'diff', values })
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
      {modal.type==='diff' && (
        <Modal 
          open
          title="codeDiff"
        >
          {/* <CodeDiff
            oldString={modal.values.oldString}
            newString={modal.values.newString}
            oldTitle={'oldString'}
            newTitle={'newString'}
          /> */}
        </Modal>
      )}
    </>
  )
}
  