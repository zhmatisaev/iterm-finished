import { Collapse } from 'antd';
import './CustomCollapse.css'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

export const CustomCollapse = ({ el }) => {
    return (
        <Collapse
            defaultActiveKey={['1']}
            expandIcon={({ isActive }) => {
                return isActive
                    ? <MinusOutlined style={{ color: '#8770FF', fontSize: 16 }} />
                    : <PlusOutlined style={{ color: '#8770FF', fontSize: 16 }} />
            }}
            ghost
        >
            {
                el.questions.map((el, id) => {
                    return <Panel header={el.question} key={id} >
                        <div className="answer" dangerouslySetInnerHTML={{ __html: el.answer }} />
                    </Panel>
                })
            }
        </Collapse>
    )
}