import css from '../ImageCard/ImageCard.module.css';

export default function ImageCard({ image, alt, onOpen, imageContent }) {
  return (
    <div>
      <img
        className={css.img}
        src={image}
        alt={alt}
        onClick={() => {
          onOpen(imageContent);
        }}
      />
    </div>
  );
}
