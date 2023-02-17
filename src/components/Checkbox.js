import { useState } from "react";

export default function Checkbox({ label, value, onChange, index, testid }) {

    return (
        <label>
            <input
                type="checkbox"
                id={`custom-checkbox-${index}`}
                checked={value}
                onChange={onChange}
                data-testid={testid}
            />
            {label}
        </label>
    );
}
