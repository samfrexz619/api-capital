import { Card } from "antd";
import UploadData from "./UploadData";


const TabItems = () => {

  const cardStyles: React.CSSProperties = {
    boxShadow: '3px 3px 14px 0px rgba(190, 190, 190, 0.30)',
    width: 500,
    borderRadius: 20,
    height: 400,
  }

  const uploadStyles: React.CSSProperties = {
    height: 330,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return ( 
    <div style={{width: '86%', margin: '0 auto',}}>
      <Card 
        bordered={false}
        title='Upload cover image' 
        style={cardStyles}
        headStyle={{
          background: '#D0F7FA',
          borderRadius: '20px 20px 0px 0px',
        }}
        bodyStyle={uploadStyles}
      >
        <UploadData  />
      </Card>
    </div>
   );
}
 
export default TabItems;