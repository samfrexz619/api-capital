import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import uploadIcon from '@/assets/upload.svg'


const { Dragger } = Upload;

const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: 'http://127.0.0.1:4010/api/367.28646585092395/programs/put/application-form',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};



const UploadData = () => {
  return ( 
    <div>
      <Dragger {...props} style={{width: 400, margin: 'auto', padding: '20px 0'}}>
          <img src={uploadIcon} alt="" />
        <p className="ant-upload-text" style={{color: '#000', fontWeight: 600, fontSize: 14}}>Upload cover image</p>
        <p className="ant-upload-hint" style={{color: '#979797', fontWeight: 300}}>
          16:9 ratio is recommended. Max image size 1mb
        </p>
      </Dragger>
    </div>
   );
}
 
export default UploadData;