import { i18nTranslate } from "@/service/i18n";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import notFoundImage from "../../public/image/shared/404page.png";
import { MdUpdate } from "react-icons/md";

export const metadata: Metadata = {
  title: i18nTranslate("notFoundPage"),
};

export default function NotFoundPage() {
  return (
    <div className="flex justify-center items-center flex-col w-full my-24 absolute">
      <h1 className="font-bold text-3xl mb-5 text-gray-800">
        {i18nTranslate("thePageYouWereLookingForWasNotFound")}
      </h1>

      <Image
        src={notFoundImage}
        alt={i18nTranslate("thePageYouWereLookingForWasNotFound")}
      />

      <Link href="/" className="btn btn-primary px-9" locale="en">
        <MdUpdate fontSize="large" />

        {i18nTranslate("backToHome")}
      </Link>
    </div>
  );
}
