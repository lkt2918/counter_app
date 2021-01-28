import React from 'react';

const Counter = (props) => {

    return (
        <div>
            <div className="row">
                <div className="col-1">
                    <span
                        style={{ fontSize: 22 }}
                        className={props.counter.value !== 0 ? 'badge bg-primary m-1' : 'badge bg-warning m-1'}>
                        {props.counter.value !== 0 ? props.counter.value : 'Zero'}
                    </span>
                </div>
                <div className="col-11">
                    <button type="button" class="btn btn-secondary m-1" onClick={() => props.plusHandler(props.counter)}>
                        <i className="fa fa-plus-circle" aria-hidden="true" />
                    </button>
                    <button
                        type="button"
                        class="btn btn-info m-1"
                        onClick={() => props.cutHandler(props.counter)}
                        disabled={props.counter.value === 0 ? "disabled" : ""}
                    >
                        <i className="fa fa-minus-circle" aria-hidden="true" />
                    </button>
                    <button type="button" class="btn btn-danger m-1" onClick={() => props.deleteHandler(props.counter)}>
                        <i className="fa fa-trash-o" aria-hidden="true" />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Counter;