import React from "react";
import "./Blog.css";
import Opera from "../Assets/opera.jpg";

const Blog = () => {
  return (
    <div className="coottt">
      <div className="blog-container">
        <div className="blog-banner flex justify-content-center align-items-center">
          <div className="blog-banner-wer flex align-items-center justify-content-between ">
            <span className="pi pi-play play-ico cursor-pointer"></span>
            <p className="title">MEDIA FOCUS</p>
            <span className="pi pi-arrow-right arr-right cursor-pointer flex align-items-center justify-content-center"></span>
          </div>
        </div>

        <div className="blog-details flex flex-column gap-8  pt-3">
          <div className="blog-intro flex align-items-center justify-content-end ">
            <div className="blog-intro-sub">
              <p>
                Menubar component uses the menubar role and the value to
                describe the menu can either be provided with aria-labelledby or
                aria-label props.
              </p>
            </div>
          </div>
          <div className="blog-title flex  flex-column align-items-center justify-content-center gap-2">
            <h3 className="batrick">Batrick Swaistan</h3>
            <p>Hello,I'm Batrick Swaistan from Althi Solutions</p>
          </div>

          <div className="blog-ref flex flex-row gap-5 justify-content-center align-items-center ">
            <div className="blog-ref-main flex flex-column gap-3  fadein animation-duration-400 pb-4">
              <div className="blog-img-cont flex flex-column  ">
                <img src={Opera} alt="opera" className="blog-img" />
                <div className="flex justify-content-between align-items-center blog-img-caption ">
                  <p className="">Batrick</p>
                  <div className="flex  flex-row gap-2 align-items-center justify-content-center blog-img-caption-ico">
                    <p className="pi pi-comments  flex flex-row align-items-center justify-content-center cursor-pointer comments-ico ">
                      <span className="num-blog ml-1">22</span>
                    </p>
                    <p className="pi pi-heart-fill  flex flex-row align-items-center justify-content-center row-gap-1  cursor-pointer like-ico">
                      <span className="num-blog ml-1">22</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="blog-inf0 flex flex-column align-items-start justify-content-center gap-2">
                <p>
                  Menubar component uses the menubar role and the value to
                  describe the menu can either be provided with aria-labelledby
                  or aria-label props.
                </p>
                <p className="cursor-pointer">See more</p>
              </div>
            </div>
            <div className="blog-ref-main flex flex-column gap-3  fadein animation-duration-400 pb-4">
              <div className="blog-img-cont flex flex-column  ">
                <img src={Opera} alt="opera" className="blog-img" />
                <div className="flex justify-content-between align-items-center blog-img-caption ">
                  <p className="">Batrick</p>
                  <div className="flex  flex-row gap-2 align-items-center justify-content-center blog-img-caption-ico">
                    <p className="pi pi-comments  flex flex-row align-items-center justify-content-center cursor-pointer comments-ico ">
                      <span className="num-blog ml-1">22</span>
                    </p>
                    <p className="pi pi-heart-fill  flex flex-row align-items-center justify-content-center row-gap-1  cursor-pointer like-ico">
                      <span className="num-blog ml-1">22</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="blog-inf0 flex flex-column align-items-start justify-content-center gap-2">
                <p>
                  Menubar component uses the menubar role and the value to
                  describe the menu can either be provided with aria-labelledby
                  or aria-label props.
                </p>
                <p className="cursor-pointer">See more</p>
              </div>
            </div>
            <div className="blog-ref-main flex flex-column gap-3  fadein animation-duration-400 pb-4">
              <div className="blog-img-cont flex flex-column  ">
                <img src={Opera} alt="opera" className="blog-img" />
                <div className="flex justify-content-between align-items-center blog-img-caption ">
                  <p className="">Batrick</p>
                  <div className="flex  flex-row gap-2 align-items-center justify-content-center blog-img-caption-ico">
                    <p className="pi pi-comments  flex flex-row align-items-center justify-content-center cursor-pointer comments-ico ">
                      <span className="num-blog ml-1">22</span>
                    </p>
                    <p className="pi pi-heart-fill  flex flex-row align-items-center justify-content-center row-gap-1  cursor-pointer like-ico">
                      <span className="num-blog ml-1">22</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="blog-inf0 flex flex-column align-items-start justify-content-center gap-2">
                <p>
                  Menubar component uses the menubar role and the value to
                  describe the menu can either be provided with aria-labelledby
                  or aria-label props.
                </p>
                <p className="cursor-pointer">See more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
