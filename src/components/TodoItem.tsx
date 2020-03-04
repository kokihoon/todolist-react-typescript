import React from 'react';

interface Props {
    key1:number;
    text: string;
    done: boolean;
    edit: boolean;
    onToggle() : void;
    onRemove(): void;
    onEdit(): void;
    onModify(id:number, e: React.ChangeEvent<HTMLInputElement>): void;
}

const TodoItem : React.SFC<Props> = ({key1, text, done, edit, onToggle, onRemove, onEdit, onModify}) => (
    
    <li className="top-line padding">
        <div
            className="li-size flex space-between"
            style={{
                textDecoration:done?'line-through' : 'none',
                color: done?'rgba(36,42,56,0.1)' : 'black',
            }}
            >
                {
                    edit ? <input type="text" className="form-input input" defaultValue={text}  onChange={(e) => { console.log(key1);onModify(key1, e)}}  onClick={(e) => {e.stopPropagation();}} />
                    : 
                    <span onClick={onToggle}>{text}</span>
                    
                }
            <div className="inline-flex">
                <button style={{ all:'unset', marginLeft:'0.5rem', color:'blue'}} onClick={onEdit}>{edit ? '완료' : '수정'}</button>
                <button style={{ all:'unset', marginLeft:'0.5rem', color:'red'}} onClick={onRemove}>삭제</button>
            </div>
        </div>
    </li>
);

export default TodoItem;