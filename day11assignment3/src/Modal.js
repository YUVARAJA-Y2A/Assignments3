import React from "react";
import "./modal.css";

function Modal() {
  return (
    <div>
      <div class="d-flex justify-content-center">
        <button
          type="button"
          class="btn btn-primary  modalbtncss"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Show Modal
        </button>

        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modalset">
            <div class="modal-content ">
              <div class="d-flex p-3 justify-content-end">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <h2
                class="modal-title d-flex justify-content-center pt-3 pb-5"
                id="staticBackdropLabel"
              >
                Modal Content
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
