import { i18nTranslate } from "@/service/i18n";
import { Metadata } from "next";
import FormCmp from "./components/FormCmp";

export const metadata: Metadata = {
  title: i18nTranslate("login"),
};

export default function LoginPage() {
  return (
    <div className="grid justify-center items-center w-full grid-cols-3">
      <div className="card w-full col-start-2 col-span-1 shadow p-9">
        <div className="card-title flex justify-center items-center mb-10">
          <h1 className=" text-gray-800 text-2xl">{i18nTranslate("login")}</h1>
        </div>

        <FormCmp />
      </div>
    </div>
  );
}
