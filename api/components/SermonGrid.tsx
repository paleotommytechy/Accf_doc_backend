// src/components/SermonGrid.tsx
import React from 'react';
import './SermonGrid.css'; // Optional for extra styles

type Sermon = {
  id: number;
  title: string;
  date: string;
  image: string;
  author: string;
};

const sermons: Sermon[] = [
  {
    id: 1,
    title: 'Jesus came to bring Joy',
    date: 'February 18, 2023',
    image: '/src/assets/sermon1.jpg',
    author: 'JILEM',
  },
  {
    id: 2,
    title: 'Is “Repent!” in the Gospel?',
    date: 'February 16, 2023',
    image: '/src/assets/sermon2.jpg',
    author: 'JILEM',
  },
  {
    id: 3,
    title: 'Humility in Prayer',
    date: 'February 18, 2023',
    image: '/src/assets/sermon3.jpg',
    author: 'JILEM',
  },
  {
    id: 4,
    title: 'What is My Faith?',
    date: 'February 16, 2023',
    image: '/src/assets/sermon4.jpg',
    author: 'JILEM',
  },
  {
    id: 5,
    title: 'God Decrees Whatsoever Comes',
    date: 'February 19, 2023',
    image: '/src/assets/sermon5.jpg',
    author: 'JILEM',
  },
];

const SermonGrid: React.FC = () => {
  return (
    <section className="container my-5">
      <div className="row g-4">
        {sermons.map((sermon) => (
          <div className="col-12 col-sm-6 col-lg-4" key={sermon.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={sermon.image}
                className="card-img-top"
                alt={sermon.title}
                style={{ objectFit: 'cover', height: '220px' }}
              />
              <div className="card-body">
                <p className="text-muted small mb-1">{sermon.date}</p>
                <h5 className="card-title">{sermon.title}</h5>
                <p className="card-text small">
                  <img
                    src="/src/assets/logo-icon.jpeg"
                    alt="logo"
                    width="20"
                    height="20"
                    className="me-2"
                  />
                  {sermon.author}
                </p>
              </div>
              <div className="icon-overlay">
  <div className="icon-circle me-2" onClick={() => handlePlay('audio')}>
    <i className="bi bi-music-note"></i>
  </div>
  <div className="icon-circle" onClick={() => handlePlay('video')}>
    <i className="bi bi-camera-video"></i>
  </div>
</div>
            </div>
          </div>
        ))}
      </div>
    </section>
     
  );
};

export default SermonGrid;