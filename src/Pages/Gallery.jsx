import React, { useState } from 'react';
import './Gallery.css'
const images = [
  // Replace these with your own URLs
  { id: 1, src: 'https://computerguru.co.in/wp-content/gallery/events/thumbs/thumbs_cgti-21-Copy.jpg', alt: 'School' },
  { id: 2, src: 'https://computerguru.co.in/wp-content/gallery/classroom/thumbs/thumbs_cgti-41.jpg', alt: 'Library' },
  { id: 3, src: 'https://computerguru.co.in/wp-content/gallery/exam/thumbs/thumbs_cgti-62.jpg', alt: 'Classroom' },
  { id: 4, src: 'https://computerguru.co.in/wp-content/gallery/events/thumbs/thumbs_cgti-17-Copy.jpg', alt: 'Lab' },
  { id: 5, src: 'https://computerguru.co.in/wp-content/gallery/exam/thumbs/thumbs_cgti-64.jpg', alt: 'Computer' },
  { id: 6, src: 'https://computerguru.co.in/wp-content/gallery/exam/thumbs/thumbs_cgti-60.jpg', alt: 'Teacher' },
];

const PhotoGallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-primary">Photo Gallery</h2>
      <div className="row g-3">
        {images.map((img) => (
          <div key={img.id} className="col-sm-6 col-md-4">
            <div className="gallery-img-wrapper">
              <img
                src={img.src}
                alt={img.alt}
                className="img-fluid rounded shadow-sm gallery-img"
                onClick={() => setSelectedImg(img.src)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal for full view */}
      {selectedImg && (
        <div className="modal d-block bg-dark bg-opacity-75" onClick={() => setSelectedImg(null)}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content bg-transparent border-0">
              <img src={selectedImg} alt="Full view" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
