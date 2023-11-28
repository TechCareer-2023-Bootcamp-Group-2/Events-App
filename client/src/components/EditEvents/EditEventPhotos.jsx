import React from "react";
import { Form, Image, Modal, Space, Upload } from "antd";
import {
  DeleteOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  PlusOutlined
} from "@ant-design/icons";
import "../../index.css";

const EditEventPhotos = ({
  isPhotosModalOpen,
  setIsPhotosModalOpen,
  eventPhotos,
}) => {
  const onFinish = (values) => {
    console.log(values);
  };

  const handleRemovePhoto = (photo) => {
    console.log(photo);
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <Modal
      title="Resimleri Düzenleme"
      footer={false}
      open={isPhotosModalOpen}
      onCancel={() => setIsPhotosModalOpen(false)}
    >
      {eventPhotos.map((photo) => (
        <Image
          width={150}
          src={photo}
          preview={{
            toolbarRender: (
              _,
              {
                transform: { scale },
                actions: { onRotateLeft, onRotateRight, onZoomOut, onZoomIn },
              }
            ) => (
              <Space size={12} className="toolbar-wrapper">
                <DeleteOutlined onClick={() => handleRemovePhoto(photo)} />
                <RotateLeftOutlined onClick={onRotateLeft} />
                <RotateRightOutlined onClick={onRotateRight} />
                <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
                <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
              </Space>
            ),
          }}
        />
      ))}
      <Form layout={"vertical"} onFinish={onFinish} className="mt-4">
      <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditEventPhotos;
