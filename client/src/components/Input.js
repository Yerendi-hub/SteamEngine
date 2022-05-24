const Input = ({val, onChange, label}) => {
    return (
        <label>
            &nbsp;{label}&nbsp;
            <input value={val} onChange={onChange} />
        </label>)
}

export default Input