import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";

import { TypeDog } from "../DogPics/TypeDog/Typedog";
import GoBackBtn from "../GoBackBtn/GoBackBtn";

import { BiSolidDog } from "react-icons/bi";

import classes from "./DogPicsResume.module.css";

import { endpoint, api_key } from "../Keys/Keys";
import ResumePlaceHolder from "./ResumePlaceHolder/ResumePlaceHolder";

const DogPicsResume = () => {
  const { id } = useParams();
  const [dog, setDog] = useState<TypeDog>();
  const getResumeDog = async () => {
    try {
      const res = await axios.get(`${endpoint}/${id}`, {
        headers: {
          "x-api-key": api_key,
        },
      });
      const data = res.data;
      setDog(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getResumeDog();
  }, []);
  return (
    <div className={classes.DogPicsResume}>
      <div className={classes.title}>
        <Link to={"/dogpics"}>
          <GoBackBtn />
        </Link>
        <h1>
          P<BiSolidDog />
          pPics
        </h1>
      </div>

      {dog ? (
        <div className={classes.container_resume}>
          <img
            className={classes.img}
            src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
            alt={`${dog.reference_image_id}`}
          />
          <div className={classes.resume}>
            <h2>Nome: {dog.name}</h2>
            {dog.origin && <h2>Origem: {dog.origin}</h2>}
            <h2>Criado para: {dog.bred_for}</h2>
            <h2>Grupo da Raça: {dog.breed_group}</h2>
            <h2>Vida Útil: {dog.life_span}</h2>
            <h2>Temperamento: {dog.temperament}</h2>
          </div>
        </div>
      ) : (
        <ResumePlaceHolder />
      )}
    </div>
  );
};

export default DogPicsResume;
