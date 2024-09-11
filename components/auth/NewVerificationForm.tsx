"use client";
import { newVerification } from "@/actions/newverification";
import CardWrapper from "@/components/auth/CardWrapper";
import { DEFAULT_LOGIN_PAGE } from "@/routes";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import FormError from "../FormError";
import FormSuccess from "../FormSuccess";

const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;
    if (!token) {
      setError("Missing Token");
      return;
    }
    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong");
      });
  }, [token, success, error]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      onSubmit();
    }
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel={"Confirming your verification"}
      backButtonLabel={"Back to Login"}
      backButtonHref={DEFAULT_LOGIN_PAGE}
    >
      <div className="flex items-center w-full justify-center">
        {!success && !error && <BeatLoader color="#286208" />}

        <FormSuccess message={success} />

        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
