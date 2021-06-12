import React from "react";
import ApplicationBar from "components/ApplicationBar";
import {
  makeStyles,
  createStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import BottomNav from "components/BottomNav";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contents: {
      marginLeft: "1vw",
      [theme.breakpoints.up("sm")]: {
        marginTop: "12vh",
      },
    },
  })
);

export default () => {
  const classes = useStyles();
  const theme = useTheme();
  const isPCSize = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div>
      {isPCSize && <ApplicationBar></ApplicationBar>}
      <div className={classes.contents}>
        <h1>It's blog time.</h1>
        <br />
        All Posts:
        <div>ここにブログ一覧が表示される予定</div>
        <br />
        <div>
          内部のファイル構成からマークダウン一覧を取得して表示するのが困難
        </div>
        <br />
        <div>解決策案</div>
        <ul>
          <li style={{ color: "red" }}>フレームワークをNext.jsに変更</li>
          <li>
            マークダウンファイルを別のバケットに保存し、APIGateway →
            Lambdaで取得処理
          </li>
        </ul>
        <br />
        <div>Next.jsのメリット</div>
        <ul>
          <li>サーバサイドレンダリング</li>
          <li>Lambda@Edgeを利用すればサーバレスで公開も可能</li>
        </ul>
      </div>
      {!isPCSize && <BottomNav />}
    </div>
  );
};
