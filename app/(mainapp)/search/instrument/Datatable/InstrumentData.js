"use client";
import { useMutation } from "@tanstack/react-query";
import { AgGridReact } from "ag-grid-react";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { InstrumentSearch } from "../service";
import { useSelector } from "react-redux";
import InfiniteLoader from "@/components/LoadingSpinner/InfiniteLoader";
import { toast } from "react-toastify";
import { BsFileEarmarkPdf } from "react-icons/bs";
const InstrumentData = () => {
    //state

    const { instrumnetFormData } = useSelector(
        (state) => state?.instrumentReducer
    );
    //function
    const { isLoading, data, mutate } = useMutation(InstrumentSearch, {
        onError({ message }) {
            toast(message, { type: "error" });
        },
    });

    const handleClick = useCallback((event, link) => {
        event.preventDefault();
        window.open(
            link,
            "Snopzer",
            "right=20,top=20,width=700,height=500,toolbar=1,resizable=0"
        );
    }, []);

    const columnDefs = useMemo(
        () => [
            {
                field: "doc_type",
                headerName: "Doc Type",
                flex: 1,
                sortable: true,
                filter: "agTextColumnFilter",
            },
            {
                field: "rec_date",
                headerName: "Rec Date",
                flex: 1,
                sortable: true,
                filter: "agTextColumnFilter",
            },
            {
                field: "batch",
                headerName: "Doc ID",
                flex: 1.5,
                sortable: true,
                filter: "agTextColumnFilter",
                cellRenderer({ value, data: { batch, image } }) {
                    return (
                        <div className="text-blue-500 flex items-center flex-wrap gap-1 cursor-pointer">
                            <BsFileEarmarkPdf />{" "}
                            <span
                                onClick={(e) =>
                                    handleClick(
                                        e,
                                        `https://tdex.unidex.ai:3002/batches/oct/pdf/${batch}/${image}.pdf`
                                    )
                                }
                            >
                                {value}
                            </span>
                        </div>
                    );
                },
            },
            {
                field: "party_one",
                headerName: "Party 1",
                flex: 2,
                sortable: true,
                filter: "agTextColumnFilter",
            },
            {
                field: "party_two",
                headerName: "Party 2",
                flex: 2,
                sortable: true,
                filter: "agTextColumnFilter",
            },
            {
                field: "legal_names",
                headerName: "Legals",
                flex: 2,
                sortable: true,
                filter: "agTextColumnFilter",
            },
        ],
        [handleClick]
    );

    const defaultColDef = useMemo(() => {
        return {
            resizable: true,
        };
    }, []);

    //table api
    const gridRef = useRef(null);

    useEffect(() => {
        if (instrumnetFormData) {
            mutate({ document_no: instrumnetFormData?.document_no });
        }
    }, [instrumnetFormData?.document_no]);

    //if instrumentdata not return null
    if (!instrumnetFormData?.document_no) {
        return null;
    } else if (isLoading) {
        return <InfiniteLoader />;
    }
    return (
        <div>
            <div className="ag-theme-alpine" style={{ height: 450, width: "100%" }}>
                <AgGridReact
                    showOpenedGroup
                    defaultColDef={defaultColDef}
                    columnHoverHighlight={false}
                    ref={gridRef}
                    autoSizePadding={2}
                    rowHeight={30}
                    pagination={true}
                    paginationPageSize={200}
                    rowData={data || []}
                    suppressRowVirtualisation={true}
                    suppressColumnVirtualisation={true}
                    overlayLoadingTemplate={
                        '<span class="ag-overlay-loading-center">Loading...</span>'
                    }
                    columnDefs={columnDefs}
                // onGridReady={() => gridRef?.current?.api?.sizeColumnsToFit()}
                ></AgGridReact>
            </div>
        </div>
    );
};

export default InstrumentData;
