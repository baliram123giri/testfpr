"use client";
import React from "react";
import MyLabel from "../Texts/MyLabel";

const AppInput = ({
  label,
  name,
  errors,
  placeholder,
  required,
  register,
  type,
  endIcon,
  startIcon,
  disabled,
  onSelect = false,
  options = [],
  onCheck = false,
  onChange = false,
}) => {
  switch (type) {
    //select
    case "select":
      return (
        <div className="flex flex-col gap-1 ">
          {label && <MyLabel name={name} label={label} required={required} />}
          <select
            disabled={disabled}
            className={`border rounded-md p-1.5 w-full`}
            {...register(name, { onChange: (e) => onSelect && onSelect(e) })}
          >
            <option value="">{`Select ${label || ""}`}</option>
            {Array.isArray(options) &&
              options.map((ele, i) => {
                return (
                  <option key={i} value={ele.value}>
                    {ele.name}
                  </option>
                );
              })}
          </select>
          {errors?.[name] && (
            <span className="text-xs text-red-600">{errors[name].message}</span>
          )}
        </div>
      );
    case "checkbox":
      return (
        <div className="flex items-center gap-1 ">
          <input
            disabled={disabled}
            type="checkbox"
            {...register(name, { onChange: (e) => onCheck && onCheck(e) })}
            id={name}
          />
          <label
            className="text-b-sm font-semibold hover:text-blue-700"
            htmlFor={name}
          >
            {label}
          </label>
          {errors?.[name] && (
            <span className="text-xs text-red-600">{errors[name].message}</span>
          )}
        </div>
      );
    //defualt
    default:
      return (
        <div className="flex flex-col gap-1 ">
          {label && <MyLabel name={name} label={label} required={required} />}
          <div className=" border rounded-md flex items-center justify-between pe-2">
            {startIcon}{" "}
            <input
              disabled={disabled}
              className={`${endIcon ? "w-[97%]" : "w-full"
                } p-1.5 rounded-md  focus:outline-none placeholder:text-neutral-600 text-b-sm `}
              type={type}
              placeholder={placeholder}
              {...register(name, { onChange: (e) => onChange && onChange(e) })}
            />{" "}
            {endIcon}
          </div>
          {errors?.[name] && (
            <span className="text-xs text-red-600">{errors[name].message}</span>
          )}
        </div>
      );
  }
};

export default AppInput;
