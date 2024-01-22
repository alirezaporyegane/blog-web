"use client";
import { i18nTranslate } from "@/service/i18n";

export default function FormCmp() {
  return (
    <form>
      <div className="mb-10">
        <label htmlFor="phoneNumber" className="pb-4">
          {i18nTranslate("phoneNumber")}
        </label>

        <input
          id="phoneNumber"
          type="text"
          className="input input-bordered w-full mb-6 mt-2"
        />

        <label htmlFor="password" className="pb-4">
          {i18nTranslate("password")}
        </label>

        <input
          id="password"
          type="text"
          className="input input-bordered w-full mt-2"
        />
      </div>

      <button className="btn btn-success btn-block">
        {i18nTranslate("send")}
      </button>
    </form>
  );
}
