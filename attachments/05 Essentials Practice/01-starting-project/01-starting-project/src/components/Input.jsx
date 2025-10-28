export default function Input( { label, value } ) {


    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input type="text" id={label} required value={value} />
        </div>
    )
}