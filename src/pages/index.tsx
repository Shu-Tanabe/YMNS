import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TopImages from "components/templates/TopImages";
import TopImagesSm from "components/templates/TopImagesSm";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import BottomNav from "components/BottomNav";
import ApplicationBar from "components/ApplicationBar";

const useStyles = makeStyles({
  content: {
    marginTop: "0vh",
  },
  firstContent: {
    height: "100vh",
  },
  secondContent: {
    height: "100vh",
    marginLeft: "1vw",
  },

  firstContentSm: {
    height: "75vh",
  },
  secondContentSm: {
    marginLeft: "2vw",
    marginBottom: "10vh",
  },
  ymnsOperationImgSm: {
    width: "95vw",
  },
});
export default () => {
  const classes = useStyles();
  const theme = useTheme();
  const isPCSize = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div>
      {isPCSize && (
        <div>
          <ApplicationBar></ApplicationBar>
          <div className={classes.content}>
            <TopImages />
            <div className={classes.firstContent}>
              写真のエリア・ここをなくすと2つ目のコンテンツが写真の裏にいく
            </div>
            <div className={classes.secondContent}>
              <h2>現状得られたメリット</h2>
              <ul>
                <li>Reactを利用した場合のレスポンシブ対応を学ぶことができた</li>
                <li>z-indexやclip-pathなどのCSSに詳しくなった</li>
                <li>CodeBuildの使い方を学んだ</li>
              </ul>
              <h2>本サイトの運用環境</h2>
              本サイトは以下のようなCI環境で運用されている
              <br />
              <img src="/img/ymns-operation104.png" />
              <h2>障害一覧</h2>
              <ul>
                <li>
                  スマホサイズでBottomNavからBlogを選択してもHomeが緑色になったままのことがある
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {!isPCSize && (
        <div>
          <div className={classes.content}>
            <TopImagesSm />
            <div className={classes.firstContentSm}>
              写真のエリア・ここをなくすと2つ目のコンテンツが写真の裏にいく
            </div>
            <div className={classes.secondContentSm}>
              <h2>現状得られたメリット</h2>
              <ul>
                <li>Reactを利用した場合のレスポンシブ対応を学ぶことができた</li>
                <li>z-indexやclip-pathなどのCSSに詳しくなった</li>
                <li>CodeBuildの使い方を学んだ</li>
              </ul>
              <h2>本サイトの運用環境</h2>
              本サイトは以下のようなCI環境で運用されている
              <br />
              <img
                src="/img/ymns-operation104.png"
                className={classes.ymnsOperationImgSm}
              />
              <h2>障害一覧</h2>
              <ul>
                <li>
                  スマホサイズでBottomNavからBlogを選択してもHomeが緑色になったままのことがある
                </li>
              </ul>
            </div>
          </div>
          <BottomNav />
        </div>
      )}
    </div>
  );
};
