type TabProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

function Tab(){
    return <p>this is a button</p>
}

export default Tab