import { iSelect } from "./types";
import { StyledSelect } from "./styles";

export const MySelect = ({ placeholder, list, label, register }: iSelect) => {
  return (
    <StyledSelect {...register}>
      <option value="">{placeholder}</option>
      {list.map((item: any) => {
        return (
          <option key={item.name} value={item.name}>
            {item.name}
          </option>
        );
      })}
    </StyledSelect>
  );
};
