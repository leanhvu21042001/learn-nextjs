import { NextPage } from "next";
import { NextPageContext } from "next";

const Error: NextPage<{ statusCode: number }> = ({ statusCode }) => {
  return (
    <p className="_error text-red-500">
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res
    ? res.statusCode ?? 404
    : err
    ? err.statusCode ?? 404
    : 404;
  return { statusCode };
};

export default Error;
