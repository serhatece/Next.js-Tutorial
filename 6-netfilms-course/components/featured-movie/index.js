import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

import styles from "./styles.module.css";

function FeaturedMovie({ movie, isCompact = true }) {
  // `movie` undefined veya boşsa varsayılan değerler ata
  if (!movie || Object.keys(movie).length === 0) {
    return (
      <div className={styles.movieWrapper}>
        <h1 className={styles.movieTitle}>No Featured Movie Available</h1>
        <div className={styles.moviePoster}>
          <div className={styles.moviePosterOverlay}></div>
          <div className={styles.placeholder}>No Image Available</div>
        </div>
      </div>
    );
  }

  const { poster_path, title, overview, id } = movie;

  return (
    <div className={styles.movieWrapper}>
      <h1 className={styles.movieTitle}>{title || "Unknown Title"}</h1>
      <p
        className={`${styles.overview} ${
          isCompact ? styles.shortOverview : ""
        }`}
      >
        {overview || "No description available."}
      </p>
      <div className={styles.actionButtons}>
        {id ? (
          <Link className={styles.playButton} href={`/movie/${id}`}>
            Play
          </Link>
        ) : (
          <button className={styles.disabledButton} disabled>
            Play
          </button>
        )}
        <button className={styles.addButton}>
          <FaPlus />
        </button>
      </div>
      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        {poster_path ? (
          <Image
            unoptimized
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={title || "Movie Poster"}
            fill
          />
        ) : (
          <div className={styles.placeholder}>No Image Available</div>
        )}
      </div>
    </div>
  );
}

export { FeatureMovieLoading } from "./loading";
export { FeaturedMovie };
