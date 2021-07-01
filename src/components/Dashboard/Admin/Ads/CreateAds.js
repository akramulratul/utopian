import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import DashboardNav from "../../DashboardNav";
import AdminSidebar from "../AdminSidebar";
import { createAd } from "../../../Redux/Actions/adControl";

const CreateAds = () => {
  const [title, setTitle] = useState();
  const [duration, setDuration] = useState();
  const [earning, setEarning] = useState();
  const [videoUrl, setVideoUrl] = useState();
  const [thumbnail, setThumbnail] = useState();
  const createAdInfo = useSelector((state) => state.createAd);
  const { loading } = createAdInfo;

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    dispatch(
      createAd(
        {
          title: title,
          status: "Active",
          duration: parseInt(duration * 1000),
          earningMoney: parseInt(earning),
          videoUrl: videoUrl,
        },
        thumbnail
      )
    );
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
              <b>Create Ad</b>
            </h2>
            {loading ? (
              <p>Creating Ad...</p>
            ) : (
              <Form>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Ad Title"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="duration">
                  <Form.Label>Duration</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="Duration in second"
                    required="true"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="earning">
                  <Form.Label>Earning</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setEarning(e.target.value)}
                    placeholder="Earning for this ad"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="thumbnail">
                  <Form.Label>Select Thumbnail</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) => setThumbnail(e.target.files[0])}
                    placeholder="Earning for this ad"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="thumbnail">
                  <Form.Label>Video Url</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setVideoUrl(e.target.value)}
                    placeholder="Video Url"
                  />
                </Form.Group>

                <Button
                  className="btn-brand py-2 px-5"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Create Add
                </Button>
              </Form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAds;
