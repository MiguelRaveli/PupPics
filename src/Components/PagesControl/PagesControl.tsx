import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";
import classes from "./PagesControl.module.css";
type PagesController = {
  page: number;
  pesquisa: string;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  endpage: number;
  limit: number;
};

const PagesControl = ({
  page,
  pesquisa,
  setPage,
  endpage,
  limit,
}: PagesController) => {
  return (
    <>
      {pesquisa === "" ? (
        <>
          <div className={classes.pages_control}>
            <button
              onClick={() => {
                if (page !== 1 && pesquisa === "") {
                  setPage(page - 1);
                }
              }}
            >
              <IoArrowBackCircle />
            </button>
            {page === 3 || page > 3 ? (
              <>
                {" "}
                <div onClick={() => setPage(page - 2)}>{page - 2}</div>
                <div onClick={() => setPage(page - 1)}>{page - 1}</div>
              </>
            ) : null}

            <div onClick={() => setPage(page)}>{page}</div>
            {page !== Math.round(endpage / limit - 1) &&
            page !== Math.round(endpage / limit - 2) ? (
              <>
                {" "}
                <div onClick={() => setPage(page + 1)}>{page + 1}</div>
                <div onClick={() => setPage(page + 2)}>{page + 2}</div>
              </>
            ) : null}

            <button
              onClick={() => {
                if (
                  page !== Math.round(endpage / limit - 1) &&
                  pesquisa === ""
                ) {
                  setPage(page + 1);
                }
              }}
            >
              <IoArrowForwardCircle />
            </button>
          </div>
        </>
      ) : null}
    </>
  );
};

export default PagesControl;
