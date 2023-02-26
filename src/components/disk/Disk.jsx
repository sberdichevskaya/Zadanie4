import React from 'react';
import "./disk.css";

const Disk = () => {
    return (
        <div>
            <div className="disk">
                <div className="disk__btns">
                    <button className="disk__back">Назад</button>
                    <button className="disk__create">Создать папку</button>
                </div>
                <FileList/>
            </div>
        </div>
    );
};

export default Disk;