import ImageCard from '../ImageCard/ImageCard';
import css from '../ImageGallery/ImageGallery.module.css';

export default function ImageGallery({ images, onOpen }) {
  return (
    <ul className={css.container}>
      {images.map(image => {
        return (
          <li className={css.list} key={image.id}>
            <ImageCard
              image={image.urls.small}
              alt={image.alt_description}
              onOpen={onOpen}
              imageContent={image}
            />
          </li>
        );
      })}
    </ul>
  );
}
