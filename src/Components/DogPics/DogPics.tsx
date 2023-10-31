import { useState, useEffect } from "react";

import { TypeDog } from "./TypeDog/Typedog";

import PagesControl from "../PagesControl/PagesControl";

import { BiSolidDog } from "react-icons/bi";

import getDogs from "./GetDogs";

import { Link } from "react-router-dom";

import classes from "./DogPics.module.css";
import ImgPlaceHolder from "./ImgPlaceHolder/ImgPlaceHolder";
import { IoArrowBackCircle } from "react-icons/io5";

const DogPics = () => {
  const [dogs, setDogs] = useState([]);
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const [endpage, setEndPage] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    setLimit(6);
    setDogs([]);
    const timer = setTimeout(() => {
      getDogs({ limit, page, pesquisa, setEndPage, setDogs });
    }, 500);
    return () => clearTimeout(timer);
  }, [pesquisa, page]);

  return (
    <>
      <div className={classes.DogPics}>
        <div className={classes.DogPics_container}>
          <div className={classes.Header}>
            <div className={classes.title}>
              <h2>
                <Link to={"/"}>
                  <IoArrowBackCircle />
                </Link>
              </h2>
              <h1>
                P<BiSolidDog />
                pPic
              </h1>
            </div>
            <div>
              <input
                onChange={(e) => setPesquisa(e.target.value)}
                className={classes.SearchBar}
                type="text"
                placeholder="Digite para pesquisar"
              />
            </div>
          </div>
          <div className={classes.body}>
            {dogs.length === 0 ? (
              <ImgPlaceHolder />
            ) : (
              dogs.map((dogs: TypeDog) => (
                <Link to={`${dogs.id}`} className={classes.container_dog}>
                  <img
                    className={classes.img_dogs}
                    src={`https://cdn2.thedogapi.com/images/${dogs.reference_image_id}.jpg`}
                    alt={`${dogs.id}`}
                  />
                  <h1>{dogs.name}</h1>
                </Link>
              ))
            )}
          </div>
        </div>
        <PagesControl
          endpage={endpage.length}
          limit={limit}
          page={page}
          pesquisa={pesquisa}
          setPage={setPage}
        />
      </div>
    </>
  );
};

export default DogPics;
