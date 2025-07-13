"use client";
import { useEffect, useState } from "react";
import axios from 'axios';

import { Button, SecondaryButton } from '../button.js';

function InputText(props) {
  const { label, name } = props;

  return (
    <div className="w-full">
      <label id={"label-" + name} htmlFor={name} className="mb-0">{label}</label>
      <input id={"input-" + name} type="text" name={name} required className="mt-1 border border-gray-200 rounded p-2 w-full" />
    </div>
  );
}

function InputTextArea(props) {
  const { label, name } = props;

  return (
    <div className="w-full">
      <label id={"label-" + name} htmlFor={name} className="mb-0">{label}</label>
      <textarea id={"input-" + name} type="textarea" name={name} rows="5" required className="mt-1 border border-gray-200 rounded p-2 w-full" />
    </div>
  );
}

export default function Submit() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
      <form action="/api/postreview" method="POST" className="w-[256px] md:w-[400px] lg:w-[512px] flex flex-col justify-center items-start gap-4">
        <p className="text-xl font-semibold">Create a Highlight</p>
        <div className="border-gray-200 border-b w-full"></div>
        <InputText label="Highlight name *" name="title" />
        <InputText label="Location *" name="location" />
        <InputTextArea label="Description *" name="description" />
        <div className="w-full flex flex-row justify-end items-center gap-2">
          <SecondaryButton href="/">Cancel</SecondaryButton>
          <Button isSubmit={true}>Confirm</Button>
        </div>
      </form>
    </div>
  );
}