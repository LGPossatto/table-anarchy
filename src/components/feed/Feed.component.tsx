import placeholderImg from "../../assets/images/placeholder.jpg";
import profileImg from "../../assets/images/profile.jpg";

import "./feed.style.scss";
import { ImgCard } from "../cards/img-card/ImgCard.component";
import { TextCard } from "../cards/text-card/TextCard.component";

export const Feed = () => {
  return (
    <div className="feed">
      <ImgCard
        profile={{ img: profileImg, name: "mock name", login: "mock login" }}
        title="mock title"
        href="/"
        img={placeholderImg}
      ></ImgCard>
      <ImgCard
        profile={{ img: profileImg, name: "mock name", login: "mock login" }}
        title="mock title"
        href="/"
        img={placeholderImg}
      ></ImgCard>
      <ImgCard
        profile={{ img: profileImg, name: "mock name", login: "mock login" }}
        title="mock title"
        href="/"
        img={placeholderImg}
      ></ImgCard>
      <ImgCard
        profile={{ img: profileImg, name: "mock name", login: "mock login" }}
        title="mock title"
        href="/"
        img={placeholderImg}
      ></ImgCard>
      <ImgCard
        profile={{ img: profileImg, name: "mock name", login: "mock login" }}
        title="mock title"
        href="/"
        img={placeholderImg}
      ></ImgCard>
      <TextCard
        profile={{ img: profileImg, name: "mock name", login: "mock login" }}
        desc="asdjasodij doasij dsaoidj oisadj oiasjd iojdaiosd jiosa jdiosaj iodj asiod jaoisdj ioas dioasidjsaoi doiasd ioaj sidoj asiod joad josai jdoisaj dosaij doisaj doiasj doijsa iodj saoid oaisdji"
        href="/"
      ></TextCard>
    </div>
  );
};
