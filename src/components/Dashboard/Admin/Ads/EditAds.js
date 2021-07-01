import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import DashboardNav from "../../DashboardNav";
import AdminSidebar from "../AdminSidebar";
import {
  createAd,
  editAdAction,
  getAdById,
} from "../../../Redux/Actions/adControl";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const EditAds = () => {
  const { id } = useParams();
  const getAdByIdInfo = useSelector((state) => state.getAdById);
  const [isLoading, setIsLoading] = useState(true);
  const { loading, adDetails, error } = getAdByIdInfo;
  const [title, setTitle] = useState();
  const [duration, setDuration] = useState();
  const [earning, setEarning] = useState();
  const [videoUrl, setVideoUrl] = useState();
  const [thumbnail, setThumbnail] = useState();
  const dispatch = useDispatch();

  const stopLoading = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    dispatch(getAdById(id));
    stopLoading();
  }, [dispatch, id]);

  console.log(adDetails);

  const handleSubmit = (e) => {
    const adData = {
      duration: parseInt(duration * 1000),
      earningMoney: parseInt(earning),
      status: "Active",
      title: title,
      videoUrl: videoUrl,
      thumbnailImage: adDetails.thumbnailImage,
    };
    dispatch(editAdAction(id, adData, thumbnail));
    e.preventDefault();
  };
  return (
    <>
      <div className="row mr-0">
        <div className="col-lg-3 p-0">
          <AdminSidebar />
        </div>
        <div className="col-lg-9 p-0 witdraw-background">
          <div>
            <DashboardNav />
          </div>

          <div className="container">
            <h2 className="pt-4">
              <b>Edit Ad</b>
            </h2>
            {isLoading ? (
              <p>Loading...</p>
            ) : loading ? (
              <p>Loading Ad...</p>
            ) : (
              <Form>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Ad Title"
                    defaultValue={adDetails.title}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="duration">
                  <Form.Label>Duration</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="Duration in ms"
                    defaultValue={adDetails.duration}
                    required="true"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="earning">
                  <Form.Label>Earning</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setEarning(e.target.value)}
                    placeholder="Earning for this ad"
                    defaultValue={adDetails.earningMoney}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="thumbnail">
                  <Form.Label>Select Thumbnail</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) => setThumbnail(e.target.files[0])}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="thumbnail">
                  <Form.Label>Video Url</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setVideoUrl(e.target.value)}
                    placeholder="Video Url"
                    defaultValue={adDetails.videoUrl}
                  />
                </Form.Group>

                <Button
                  className="btn-brand py-2 px-5"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Update
                </Button>
              </Form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditAds;
