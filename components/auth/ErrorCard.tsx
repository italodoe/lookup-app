
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import CardWrapper from "./CardWrapper";
import { DEFAULT_LOGIN_PAGE } from "@/routes";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel={"Something went wrong"}
      backButtonLabel={"Back to login"}
      backButtonHref={DEFAULT_LOGIN_PAGE}
    >
      <div className="w-full flex justify-center items-center">
        <ExclamationTriangleIcon className="text-destructive" />
        <div className="text-destructive mx-1">:(</div>
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
