import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/user/user_actions";
import {
    EuiBasicTable,
    EuiIcon,
    EuiToolTip,
    Pagination
} from "@elastic/eui";

import { User, UserState } from "../../store/user/user_types";
import { Primitive } from "@elastic/eui/src/services/sort/comparators";
import { LoadingState } from "../../store/loading/loading_types";

type Align = 'left' | 'right' | 'center';

interface Column {
    className?: string,
    'aria-label'?: string,
    'data-test-subj'?: string,
    field: string,
    name: string,
    description?: string
    dataType?: any,
    width?: string,
    sortable?: boolean | Primitive
    isExpander?: boolean,
    textOnly?: boolean,
    align?: Align,
    truncateText?: boolean,
    isMobileHeader?: boolean,
    mobileOptions?: any,
    hideForMobile?: boolean,
    render?: ReactNode,
    footer?: any
}

interface Page {
    index: number,
    size: number
};

const UserView: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { results } = useSelector((state) : UserState => state.user);
    const { busy } = useSelector((state): LoadingState => state.loading);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [sortField, setSortField] = useState('name');
    const [sortDirection, setSortDirection] = useState('asc');
    
    useEffect(() => {
        dispatch(getUsers(pageSize, pageIndex));
    }, [pageIndex])


    const columns: Array<any> = [
        {
            field: 'name',
            name: 'Name',
            sortable: true,
        },
        {
            field: 'username',
            name: 'Username',
            sortable: true,
        },
        {
            field: 'email',
            name: 'Email',
            sortable: true,
        },
        {
            field: 'phone',
            name: 'Phone',
            sortable: true,
        },
        {
            field: 'website',
            name: 'Website',
            sortable: true,
        },
        {
            field: 'company.name',
            name: 'Company',
            sortable: true,
        },
    ]

    const getRowProps: Function = (item: User) => {
        const { id } = item;
        return {
            'data-test-subj': `row-${id}`,
            className: 'customRowClass',
            onClick: () => console.log(item)
            
        }
    } 
    
    const getCellProps: Function = (item: User, column: Column) => {
        const { id } = item;
        const { field } = column;

        return {
            className: 'customCellClass',
            'data-test-subj': `cell-${id}-${field}`,
            textOnly: true,
            onClick: () => console.log(column)
        };
    }

    const onChangePagination = (page) => {
        const { index, size } = page.page;

        setPageIndex(index);
        setPageSize(size);
    }

    const paginations: Pagination = {
        pageIndex,
        pageSize,
        totalItemCount: results.length,
        pageSizeOptions: [5, 10],
        hidePerPageOptions: false,
    }

    return(
        <div>
            <EuiBasicTable
                id='users-table'
                pagination={paginations}
                loading={busy}
                items={results}
                columns={columns}
                rowProps={getRowProps}
                cellProps={getCellProps}
                onChange={onChangePagination}
            />
        </div>
    );
}

export default UserView;