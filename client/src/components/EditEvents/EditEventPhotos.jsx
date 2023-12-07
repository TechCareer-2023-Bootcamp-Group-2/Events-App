import React, { useState } from "react";
import { Image, Modal, Space, message } from "antd";
import {
  DeleteOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import "../../index.css";
import axios from "axios";

const EditEventPhotos = ({
  isPhotosModalOpen,
  setIsPhotosModalOpen,
  eventPhotos,
  event
}) => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();

  const handleRemovePhoto = async (photo) => {
    try {
      await axios.delete(process.env.REACT_APP_SERVER_URL + "/EventImages/Delete/" + photo);
      fetch(process.env.REACT_APP_SERVER_URL + "/EventImages/Delete", {
        method: "DELETE",
        body: JSON.stringify({id: photo}),
      });
      message.success("Resim silme işlemi başarılı.");
    } catch (error) {
      console.log(error);
    }
    console.log(photo);
  };

  function handleChange(e) {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  }

  const uploadImage = async () => {
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("FileName", fileName);
    formData.append("eventId", event.id);

    try {
      const res = await axios.post(
        process.env.REACT_APP_SERVER_URL + "/EventImages/Upload",
        formData
      );
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
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
          key={photo}
          src={process.env.REACT_APP_SERVER_URL + "/EventImages?id=" + photo}
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
      <div className="mt-5">
        <h2 className="text-lg font-semibold mb-2">Add Image:</h2>
        <input type="file" onChange={handleChange} className="mb-3" />
        <h2 className="text-lg font-semibold mb-2">Upload:</h2>
        <input
          type="button"
          value="upload"
          onClick={uploadImage}
          className="cursor-pointer mb-3 p-3 bg-white text-purple-700 border border-purple-700 hover:bg-purple-700 hover:text-white rounded-lg"
        />
      </div>
    </Modal>
  );
};

export default EditEventPhotos;