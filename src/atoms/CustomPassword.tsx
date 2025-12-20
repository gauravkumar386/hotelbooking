import { Password } from "primereact/password";
import { Divider } from "primereact/divider";
import { FloatLabel } from "primereact/floatlabel";

type Props = {
  value?: string;
  name?: string;
  placeholder: string;
  label?: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onClear?: () => void;
};

const CustomPassword = (props: Props) => {
  const {
    value,
    placeholder,
    name = "password",
    label = "Password",
    disabled = false,
    onChange,
    onBlur,
    onClear,
  } = props;
  const header = <div className="font-bold mb-3">Pick a password</div>;
  const footer = (
    <>
      <Divider />
      <p className="mt-2">Suggestions</p>
      <ul className="pl-2 ml-2 mt-0 line-height-3">
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 7 characters</li>
      </ul>
    </>
  );

  return (
    <div className="card flex justify-content-center">
      <FloatLabel>
        <Password
          inputId={name}
          value={value}
          onChange={onChange}
          header={header}
          footer={footer}
          disabled={disabled}
        />
        <label htmlFor="password">{label}</label>
      </FloatLabel>
    </div>
  );
};

export default CustomPassword;
