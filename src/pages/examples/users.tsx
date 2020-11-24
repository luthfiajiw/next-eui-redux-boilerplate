import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/user/user_actions";
import {
    EuiBasicTable,
    EuiIcon,
    EuiToolTip
} from "@elastic/eui";

import { User } from "../../store/user/user_types";
import { Primitive } from "@elastic/eui/src/services/sort/comparators";

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
    align?: 'left' | 'right' | 'center',
    truncateText?: boolean,
    isMobileHeader?: boolean,
    mobileOptions?: any,
    hideForMobile?: boolean,
    render?: ReactNode,
    footer?: any
}

const UserView: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { results } = useSelector(state => state.user);
    const [sortField, setSortField] = useState('name');
    const [sortDirection, setSortDirection] = useState('asc');
    
    useEffect(() => {
        dispatch(getUsers());
    }, [])


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

    return(
        <div>
            <EuiBasicTable
                items={results}
                columns={columns}
                rowProps={getRowProps}
                cellProps={getCellProps}
            />
        </div>
    );
}

export default UserView;