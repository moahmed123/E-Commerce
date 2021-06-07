import React, { Component } from 'react';
import { Container, Card, CardBody, Row, Col, Nav, NavItem, NavLink, UncontrolledTooltip, Input, Label, Button, TabContent, TabPane, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Alert, Table } from "reactstrap";
import { Link } from "react-router-dom";
import classnames from 'classnames';

import { MDBDataTable } from "mdbreact";
import "./datatables.scss";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
//select
import Select from 'react-select';
import { AvForm, AvField } from "availity-reactstrap-validation";
import { connect } from "react-redux";
import { GPDATA } from '../../store/actionsdata';
// import {getProducts} from '../../store/actions';

const optionGroup = [
    {
        label: "Picnic",
        options: [
            { label: "Mustard", value: "Mustard" },
            { label: "Ketchup", value: "Ketchup" },
            { label: "Relish", value: "Relish" }
        ]
    },
    {
        label: "Camping",
        options: [
            { label: "Tent", value: "Tent" },
            { label: "Flashlight", value: "Flashlight" },
            { label: "Toilet Paper", value: "Toilet Paper" }
        ]
    }
];
class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems: [
                { title: "Ecommerce", link: "#" },
                { title: "Products", link: "#" },
            ],
            activeTab: '1',
            isAlertOpen: false,
            modal_category: false,
            modal_subcategory: false,
            modal_brand: false,
            selectedGroup: null,
            brandData: [
                {
                    brandEn: "Carolyn Harvey",
                    brandAr: "CarolynHarvey@rhyta.com",
                    date: "06 Apr, 2020",
                },
                {
                    brandEn: "Angelyn Hardin",
                    brandAr: "AngelynHardin@dayrep.com",
                    date: "05 Apr, 2020",
                },
                {
                    brandEn: "Carrie Thompson	",
                    brandAr: "CarrieThompson@rhyta.com",
                    date: "04 Apr, 2020",
                },
                {
                    brandEn: "Kathleen Haller",
                    brandAr: "KathleenHaller@dayrep.com",
                    date: "03 Apr, 2020",
                },
                {
                    brandEn: "Martha Beasley",
                    brandAr: "MarthaBeasley@teleworm.us",
                    date: "02 Apr, 2020",
                },
                {
                    brandEn: "Kathryn Hudson",
                    brandAr: "KathrynHudson@armyspy.com",
                    date: "02 Apr, 2020",
                },
                {
                    brandEn: "Robert Bott",
                    brandAr: "RobertBott@armyspy.com",
                    date: "01 Apr, 2020",
                },
                {
                    brandEn: "Mary McDonald",
                    brandAr: "MaryMcDonald@armyspy.com",
                    date: "31 Mar, 2020",
                },
                {
                    brandEn: "Keith Rainey",
                    brandAr: "KeithRainey@jourrapide.com",
                    date: "30 Mar, 2020",
                },
                {
                    brandEn: "Anthony Russo",
                    brandAr: "AnthonyRusso@jourrapide.com",
                    date: "30 Mar, 2020",
                },
                {
                    brandEn: "Donna Betz",
                    brandAr: "DonnaBetz@jourrapide.com",
                    date: "29 Mar, 2020",
                },
                {
                    brandEn: "Angie Andres",
                    brandAr: "AngieAndres@armyspy.com",
                    date: "28 Apr, 2020"
                }
            ]
        }
        this.toggleTab = this.toggleTab.bind(this);
        this.addBrand.bind(this);
    }

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    //Select
    handleSelectGroup = selectedGroup => {
        this.setState({ selectedGroup });
    };
    componentDidMount() {
        // document.getElementsByClassName("pagination")[ 0 ].classList.add("pagination-rounded");
        console.log('product page');                
        this.props.dispatch(GPDATA.getPro());
    }
    addBrand = (event, values) => {
        //Assign values to the variables
        var nameEn = values.brandname_en;
        var nameAr = values.brandname_ar;
        var d = new Date();
        var day = d.getDate();
        var mon = d.getMonth();
        var y = d.getFullYear();
        var date = day + "/" + mon + "/" + y;
        let demoData = this.state.brandData;

        //push data to the varible
        demoData.push({ brandEn: nameEn, brandAr: nameAr, date: date })

        //update data state
        this.setState({ brandData: demoData });

        //show alert for success message
        this.setState({ isAlertOpen: true });

        //update state for closing
        setTimeout(() => {
            this.setState({ modal_brand: false });
        }, 2000);
    }
    render() {
        const { selectedGroup } = this.state;
        const data = {
            columns: [
                {
                    label: <div className="custom-control custom-checkbox"> <Input type="checkbox" className="custom-control-input" id="ordercheck" /><Label className="custom-control-label" htmlFor="ordercheck">&nbsp;</Label></div>,
                    field: "checkbox",
                    sort: "asc",
                    width: 28
                },
                {
                    label: "Order ID",
                    field: "id",
                    sort: "asc",
                    width: 78
                },
                {
                    label: "Date",
                    field: "date",
                    sort: "asc",
                    width: 93
                },
                {
                    label: "Billing Name",
                    field: "billingName",
                    sort: "asc",
                    width: 109
                },
                {
                    label: "Total",
                    field: "total",
                    sort: "asc",
                    width: 48
                },
                {
                    label: "Payment Status",
                    field: "status",
                    sort: "asc",
                    width: 135
                },
                {
                    label: "Invoice",
                    field: "invoice",
                    sort: "asc",
                    width: 110
                },
                {
                    label: "Action",
                    field: "action",
                    sort: "asc",
                    width: 120
                },
            ],
            rows: [
                {
                    checkbox:
                        <div className="custom-control custom-checkbox">
                            <Input type="checkbox" className="custom-control-input" id="ordercheck1" />
                            <Label className="custom-control-label" htmlFor="ordercheck1">&nbsp;</Label>
                        </div>,
                    id: <Link to="#" className="text-dark font-weight-bold">#NZ1572</Link>,
                    date: "04 Apr, 2020",
                    billingName: "Walter Brown",
                    total: "$172",
                    status: <div className="badge badge-soft-success font-size-12">Paid</div>,
                    invoice: <Button className="btn-rounded" color="light">Invoice <i className="mdi mdi-download ml-2"></i></Button>,
                    action: <><Link to="#" className="mr-3 text-primary" id="edit1"><i className="mdi mdi-pencil font-size-18"></i></Link>
                        <UncontrolledTooltip placement="top" target="edit1">
                            Edit
                            </UncontrolledTooltip >
                        <Link to="#" className="text-danger" id="delete1"><i className="mdi mdi-trash-can font-size-18"></i></Link>
                        <UncontrolledTooltip placement="top" target="delete1">
                            Delete
                            </UncontrolledTooltip >
                    </>
                },
                {
                    checkbox:
                        <div className="custom-control custom-checkbox">
                            <Input type="checkbox" className="custom-control-input" id="ordercheck2" />
                            <Label className="custom-control-label" htmlFor="ordercheck2">&nbsp;</Label>
                        </div>,
                    id: <Link to="#" className="text-dark font-weight-bold">#NZ1571</Link>,
                    date: "03 Apr, 2020",
                    billingName: "Jimmy Barker",
                    total: "$165",
                    status: <div className="badge badge-soft-warning font-size-12">unpaid</div>,
                    invoice: <Button className="btn-rounded" color="light">Invoice <i className="mdi mdi-download ml-2"></i></Button>,
                    action: <><Link to="#" className="mr-3 text-primary" id="edit2"><i className="mdi mdi-pencil font-size-18"></i></Link>
                        <UncontrolledTooltip placement="top" target="edit2">
                            Edit
                            </UncontrolledTooltip >
                        <Link to="#" className="text-danger" id="delete2"><i className="mdi mdi-trash-can font-size-18"></i></Link>
                        <UncontrolledTooltip placement="top" target="delete2">
                            Delete
                            </UncontrolledTooltip >
                    </>
                },
                {
                    checkbox:
                        <div className="custom-control custom-checkbox">
                            <Input type="checkbox" className="custom-control-input" id="ordercheck3" />
                            <Label className="custom-control-label" htmlFor="ordercheck3">&nbsp;</Label>
                        </div>,
                    id: <Link to="#" className="text-dark font-weight-bold">#NZ1570</Link>,
                    date: "03 Apr, 2020",
                    billingName: "Donald Bailey",
                    total: "$146",
                    status: <div className="badge badge-soft-success font-size-12">Paid</div>,
                    invoice: <Button className="btn-rounded" color="light">Invoice <i className="mdi mdi-download ml-2"></i></Button>,
                    action: <><Link to="#" className="mr-3 text-primary" id="edit3"><i className="mdi mdi-pencil font-size-18"></i></Link>
                        <UncontrolledTooltip placement="top" target="edit3">
                            Edit
                            </UncontrolledTooltip >
                        <Link to="#" className="text-danger" id="delete3"><i className="mdi mdi-trash-can font-size-18"></i></Link>
                        <UncontrolledTooltip placement="top" target="delete3">
                            Delete
                            </UncontrolledTooltip >
                    </>
                },
                {
                    checkbox:
                        <div className="custom-control custom-checkbox">
                            <Input type="checkbox" className="custom-control-input" id="ordercheck4" />
                            <Label className="custom-control-label" htmlFor="ordercheck4">&nbsp;</Label>
                        </div>,
                    id: <Link to="#" className="text-dark font-weight-bold">#NZ1569</Link>,
                    date: "02 Apr, 2020",
                    billingName: "Paul Jones",
                    total: "$183",
                    status: <div className="badge badge-soft-success font-size-12">Paid</div>,
                    invoice: <Button className="btn-rounded" color="light">Invoice <i className="mdi mdi-download ml-2"></i></Button>,
                    action: <><Link to="#" className="mr-3 text-primary" id="edit4"><i className="mdi mdi-pencil font-size-18"></i></Link>
                        <UncontrolledTooltip placement="top" target="edit4">
                            Edit
                            </UncontrolledTooltip >
                        <Link to="#" className="text-danger" id="delete5"><i className="mdi mdi-trash-can font-size-18"></i></Link>
                        <UncontrolledTooltip placement="top" target="delete5">
                            Delete
                            </UncontrolledTooltip >
                    </>
                },
                {
                    checkbox:
                        <div className="custom-control custom-checkbox">
                            <Input type="checkbox" className="custom-control-input" id="ordercheck6" />
                            <Label className="custom-control-label" htmlFor="ordercheck6">&nbsp;</Label>
                        </div>,
                    id: <Link to="#" className="text-dark font-weight-bold">#NZ1568</Link>,
                    date: "04 Apr, 2020",
                    billingName: "Walter Brown",
                    total: "$172",
                    status: <div className="badge badge-soft-danger font-size-12">Chargeback</div>,
                    invoice: <Button className="btn-rounded" color="light">Invoice <i className="mdi mdi-download ml-2"></i></Button>,
                    action: <><Link to="#" className="mr-3 text-primary" id="edit6"><i className="mdi mdi-pencil font-size-18"></i></Link>
                        <UncontrolledTooltip placement="top" target="edit6">
                            Edit
                            </UncontrolledTooltip >
                        <Link to="#" className="text-danger" id="delete6"><i className="mdi mdi-trash-can font-size-18"></i></Link>
                        <UncontrolledTooltip placement="top" target="delete6">
                            Delete
                            </UncontrolledTooltip >
                    </>
                },
                {
                    checkbox:
                        <div className="custom-control custom-checkbox">
                            <Input type="checkbox" className="custom-control-input" id="ordercheck7" />
                            <Label className="custom-control-label" htmlFor="ordercheck7">&nbsp;</Label>
                        </div>,
                    id: <Link to="#" className="text-dark font-weight-bold">#NZ1567</Link>,
                    date: "04 Apr, 2020",
                    billingName: "Walter Brown",
                    total: "$172",
                    status: <div className="badge badge-soft-warning font-size-12">unpaid</div>,
                    invoice: <Button className="btn-rounded" color="light">Invoice <i className="mdi mdi-download ml-2"></i></Button>,
                    action: <><Link to="#" className="mr-3 text-primary" id="edit7"><i className="mdi mdi-pencil font-size-18"></i></Link>
                        <UncontrolledTooltip placement="top" target="edit7">
                            Edit
                            </UncontrolledTooltip >
                        <Link to="#" className="text-danger" id="delete7"><i className="mdi mdi-trash-can font-size-18"></i></Link>
                        <UncontrolledTooltip placement="top" target="delete7">
                            Delete
                            </UncontrolledTooltip >
                    </>
                },
                {
                    checkbox:
                        <div className="custom-control custom-checkbox">
                            <Input type="checkbox" className="custom-control-input" id="ordercheck8" />
                            <Label className="custom-control-label" htmlFor="ordercheck8">&nbsp;</Label>
                        </div>,
                    id: <Link to="#" className="text-dark font-weight-bold">#NZ1566</Link>,
                    date: "04 Apr, 2020",
                    billingName: "Walter Brown",
                    total: "$172",
                    status: <div className="badge badge-soft-success font-size-12">Paid</div>,
                    invoice: <Button className="btn-rounded" color="light">Invoice <i className="mdi mdi-download ml-2"></i></Button>,
                    action: <><Link to="#" className="mr-3 text-primary" id="edit9"><i className="mdi mdi-pencil font-size-18"></i></Link>
                        <UncontrolledTooltip placement="top" target="edit9">
                            Edit
                            </UncontrolledTooltip >
                        <Link to="#" className="text-danger" id="delete9"><i className="mdi mdi-trash-can font-size-18"></i></Link>
                        <UncontrolledTooltip placement="top" target="delete9">
                            Delete
                            </UncontrolledTooltip >
                    </>
                },
                {
                    checkbox:
                        <div className="custom-control custom-checkbox">
                            <Input type="checkbox" className="custom-control-input" id="ordercheck10" />
                            <Label className="custom-control-label" htmlFor="ordercheck10">&nbsp;</Label>
                        </div>,
                    id: <Link to="#" className="text-dark font-weight-bold">#NZ1565</Link>,
                    date: "04 Apr, 2020",
                    billingName: "Walter Brown",
                    total: "$172",
                    status: <div className="badge badge-soft-success font-size-12">Paid</div>,
                    invoice: <Button className="btn-rounded" color="light">Invoice <i className="mdi mdi-download ml-2"></i></Button>,
                    action: <><Link to="#" className="mr-3 text-primary" id="edit10"><i className="mdi mdi-pencil font-size-18"></i></Link>
                        <UncontrolledTooltip placement="top" target="edit10">
                            Edit
                            </UncontrolledTooltip >
                        <Link to="#" className="text-danger" id="delete10"><i className="mdi mdi-trash-can font-size-18"></i></Link>
                        <UncontrolledTooltip placement="top" target="delete10">
                            Delete
                            </UncontrolledTooltip >
                    </>
                },
                {
                    checkbox:
                        <div className="custom-control custom-checkbox">
                            <Input type="checkbox" className="custom-control-input" id="ordercheck11" />
                            <Label className="custom-control-label" htmlFor="ordercheck11">&nbsp;</Label>
                        </div>,
                    id: <Link to="#" className="text-dark font-weight-bold">#NZ1564</Link>,
                    date: "04 Apr, 2020",
                    billingName: "Walter Brown",
                    total: "$172",
                    status: <div className="badge badge-soft-success font-size-12">Paid</div>,
                    invoice: <Button className="btn-rounded" color="light">Invoice <i className="mdi mdi-download ml-2"></i></Button>,
                    action: <><Link to="#" className="mr-3 text-primary" id="edit11"><i className="mdi mdi-pencil font-size-18"></i></Link>
                        <UncontrolledTooltip placement="top" target="edit11">
                            Edit
                            </UncontrolledTooltip >
                        <Link to="#" className="text-danger" id="delete11"><i className="mdi mdi-trash-can font-size-18"></i></Link>
                        <UncontrolledTooltip placement="top" target="delete11">
                            Delete
                            </UncontrolledTooltip >
                    </>
                },
                {
                    checkbox:
                        <div className="custom-control custom-checkbox">
                            <Input type="checkbox" className="custom-control-input" id="ordercheck12" />
                            <Label className="custom-control-label" htmlFor="ordercheck12">&nbsp;</Label>
                        </div>,
                    id: <Link to="#" className="text-dark font-weight-bold">#NZ1563</Link>,
                    date: "04 Apr, 2020",
                    billingName: "Walter Brown",
                    total: "$172",
                    status: <div className="badge badge-soft-warning font-size-12">unpaid</div>,
                    invoice: <Button className="btn-rounded" color="light">Invoice <i className="mdi mdi-download ml-2"></i></Button>,
                    action: <><Link to="#" className="mr-3 text-primary" id="edit12"><i className="mdi mdi-pencil font-size-18"></i></Link>
                        <UncontrolledTooltip placement="top" target="edit12">
                            Edit
                            </UncontrolledTooltip >
                        <Link to="#" className="text-danger" id="delete12"><i className="mdi mdi-trash-can font-size-18"></i></Link>
                        <UncontrolledTooltip placement="top" target="delete12">
                            Delete
                            </UncontrolledTooltip >
                    </>
                },
                {
                    checkbox:
                        <div className="custom-control custom-checkbox">
                            <Input type="checkbox" className="custom-control-input" id="ordercheck13" />
                            <Label className="custom-control-label" htmlFor="ordercheck13">&nbsp;</Label>
                        </div>,
                    id: <Link to="#" className="text-dark font-weight-bold">#NZ15632</Link>,
                    date: "04 Apr, 2020",
                    billingName: "Walter Brown",
                    total: "$172",
                    status: <div className="badge badge-soft-success font-size-12">Paid</div>,
                    invoice: <Button className="btn-rounded" color="light">Invoice <i className="mdi mdi-download ml-2"></i></Button>,
                    action: <><Link to="#" className="mr-3 text-primary" id="edit13"><i className="mdi mdi-pencil font-size-18"></i></Link>
                        <UncontrolledTooltip placement="top" target="edit13">
                            Edit
                            </UncontrolledTooltip >
                        <Link to="#" className="text-danger" id="delete13"><i className="mdi mdi-trash-can font-size-18"></i></Link>
                        <UncontrolledTooltip placement="top" target="delete13">
                            Delete
                            </UncontrolledTooltip >
                    </>
                },
            ]
        }
        console.log("this.props.ProductData",this.props.ProductData)
        if(!this.props.ProductData){
            console.log(this.props.ProductData)
            return <div>Loading .....</div> 
            
        }
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        <Breadcrumbs title="Products" breadcrumbItems={ this.state.breadcrumbItems } />

                        <Row>
                            <Col lg={ 12 }>
                                <Card>
                                    <CardBody className="pt-0">
                                        <Nav tabs className="nav-tabs-custom mb-2">
                                            <NavItem>
                                                <NavLink onClick={ () => { this.toggleTab('1'); } } className={ classnames({ active: this.state.activeTab === '1' }, "font-weight-bold p-3") }>All Products</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink onClick={ () => { this.toggleTab('2'); } } className={ classnames({ active: this.state.activeTab === '2' }, "p-3 font-weight-bold") }>All Category</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink onClick={ () => { this.toggleTab('3'); } } className={ classnames({ active: this.state.activeTab === '3' }, " p-3 font-weight-bold") }>Sub Category</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink onClick={ () => { this.toggleTab('4'); } } className={ classnames({ active: this.state.activeTab === '4' }, " p-3 font-weight-bold") }>All Brands</NavLink>
                                            </NavItem>
                                        </Nav>
                                        <TabContent activeTab={ this.state.activeTab }>
                                            <TabPane tabId="1" className="p-3">
                                                <div className="text-right">
                                                    <Link to="#" onClick={ () => this.setState({ modal_brand: true, isAlertOpen: false }) } className="btn btn-primary mb-2"><i className="mdi mdi-plus mr-2"></i> Add Product </Link>
                                                </div>
                                                <Row>
                                                    <Col sm="12">
                                                        <div className="table-responsive mt-3">
                                                            <Table className="table-centered datatable dt-responsive nowrap " style={ { borderCollapse: "collapse", borderSpacing: 0, width: "100%" } }>
                                                                <thead className="thead-light">
                                                                    <tr>
                                                                        <th style={ { width: "20px" } }>
                                                                            <div className="custom-control custom-checkbox">
                                                                                <Input type="checkbox" className="custom-control-input" id="customercheck" />
                                                                                <Label className="custom-control-label" htmlFor="customercheck">&nbsp;</Label>
                                                                            </div>
                                                                        </th>
                                                                        <th>Brand En</th>
                                                                        <th>Brand Ar</th>
                                                                        <th>Joining Date</th>
                                                                        <th style={ { width: "120px" } }>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                 
                                                                      {
                                                                        this.props.ProductData.map((brandData, key) =>
                                                                            <tr key={ key }>
                                                                                <td>
                                                                                    <div className="custom-control custom-checkbox">
                                                                                        <Input type="checkbox" className="custom-control-input" id={ "customercheck" + key } />
                                                                                        <Label className="custom-control-label" htmlFor={ "customercheck" + key }>&nbsp;</Label>
                                                                                    </div>
                                                                                </td>

                                                                                <td>{ brandData.name }</td>
                                                                                <td>{ brandData.category }</td>
                                                                                <td>
                                                                                    { brandData.new}
                                                                                </td>
                                                                                <td>
                                                                                    <Link to="#" className="mr-3 text-primary" id={ "edit" + key }><i className="mdi mdi-pencil font-size-18"></i></Link>
                                                                                    <UncontrolledTooltip target={ "edit" + key } placement="top">
                                                                                        Edit
                                                                    </UncontrolledTooltip>
                                                                                    <Link to="#" className="text-danger" id={ "delete" + key }><i className="mdi mdi-trash-can font-size-18"></i></Link>
                                                                                    <UncontrolledTooltip target={ "delete" + key } placement="top">
                                                                                        Delete
                                                                    </UncontrolledTooltip>
                                                                                </td>
                                                                            </tr>
                                                                        )
                                                                    }
                                                                </tbody>
                                                            </Table>
                                                        </div>

                                                    </Col>
                                                </Row>
                                                <Modal
                                                    isOpen={ this.state.modal_brand }
                                                    toggle={ this.tog_static }
                                                    backdrop="static"
                                                    centered
                                                    size="lg"
                                                >
                                                    <ModalHeader toggle={ () => this.setState({ modal_brand: false }) }>
                                                        Add New Brand
                                                    </ModalHeader>
                                                    <ModalBody>
                                                        <AvForm onValidSubmit={ this.addBrand }>
                                                            <Row>
                                                                <Col lg={ 12 }>
                                                                    <Alert color="success" isOpen={ this.state.isAlertOpen } toggle={ () => this.setState({ isAlertOpen: false }) }>
                                                                        Data Added Successfully...!
                                                                     </Alert>
                                                                    <Row>
                                                                        <Col lg={ 6 }>
                                                                            <FormGroup>
                                                                                <Label htmlFor="name">Brand Name(en)</Label>
                                                                                <AvField
                                                                                    name="brandname_en"
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    id="brandname_en"
                                                                                    placeholder="Enter Brand Name"
                                                                                    required
                                                                                />
                                                                            </FormGroup>
                                                                        </Col>
                                                                        <Col lg={ 6 }>
                                                                            <FormGroup>
                                                                                <Label htmlFor="name">Brand Name(ar)</Label>
                                                                                <AvField
                                                                                    name="brandname_ar"
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    id="brandname_ar"
                                                                                    placeholder="Enter Brand Name"
                                                                                    required
                                                                                />
                                                                            </FormGroup>
                                                                        </Col>
                                                                    </Row>
                                                                </Col>
                                                            </Row>

                                                            <ModalFooter>
                                                                <Button type="button" color="light" onClick={ () => this.setState({ modal_brand: false }) }>Calcel</Button>
                                                                <Button type="submit" color="primary">Add</Button>
                                                            </ModalFooter>

                                                        </AvForm>

                                                    </ModalBody>
                                                </Modal>

                                            </TabPane>
                                            <TabPane tabId="2" className="p-3">
                                                <div className="text-right">
                                                    <Link to="/ecommerce-add-product" className="btn btn-primary mb-2"><i className="mdi mdi-plus mr-2"></i> Add Product</Link>
                                                </div>
                                                <Row>
                                                    <Col sm="12">
                                                        <MDBDataTable responsive data={ data } className="mt-1" />
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                            <TabPane tabId="3" className="p-3">
                                                <div className="text-right">
                                                    <Link to="#" onClick={ () => this.setState({ modal_category: true, isAlertOpen: false }) } className="btn btn-primary mb-2"><i className="mdi mdi-plus mr-2"></i> Add Category</Link>
                                                </div>
                                                <Row>
                                                    <Col sm="12">
                                                        <MDBDataTable responsive data={ data } className="mt-1" />
                                                    </Col>
                                                </Row>
                                                <Modal
                                                    isOpen={ this.state.modal_category }
                                                    toggle={ this.tog_static }
                                                    backdrop="static"
                                                    centered
                                                    size="lg"
                                                >
                                                    <ModalHeader toggle={ () => this.setState({ modal_category: false }) }>
                                                        Add Category
                                                    </ModalHeader>
                                                    <ModalBody>
                                                        <AvForm onValidSubmit={ this.addCustomer }>
                                                            <Row>
                                                                <Col lg={ 12 }>
                                                                    <Alert color="success" isOpen={ this.state.isAlertOpen } toggle={ () => this.setState({ isAlertOpen: false }) }>
                                                                        Data Added Successfully...!
                                                                     </Alert>
                                                                    <FormGroup>
                                                                        <Label htmlFor="name">Customer Name</Label>
                                                                        <AvField
                                                                            name="custname"
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="custname"
                                                                            placeholder="Enter Customer Name"
                                                                            required
                                                                        />
                                                                    </FormGroup>
                                                                </Col>
                                                            </Row>

                                                            <Row>
                                                                <Col lg={ 4 }>
                                                                    <FormGroup>
                                                                        <Label htmlFor="email">Email</Label>
                                                                        <AvField
                                                                            name="custemail"
                                                                            type="email"
                                                                            className="form-control"
                                                                            id="custemail"
                                                                            placeholder="Enter Email"
                                                                            required
                                                                        />
                                                                    </FormGroup>
                                                                </Col>

                                                                <Col lg={ 4 }>
                                                                    <FormGroup>
                                                                        <Label htmlFor="email">Phone Number</Label>
                                                                        <AvField
                                                                            name="phonenumber"
                                                                            type="number"
                                                                            className="form-control"
                                                                            id="phonenumber"
                                                                            placeholder="Enter Phone Number"
                                                                            required
                                                                        />
                                                                    </FormGroup>
                                                                </Col>

                                                                <Col lg={ 4 }>
                                                                    <FormGroup>
                                                                        <Label htmlFor="email">Wallet Balance</Label>
                                                                        <AvField
                                                                            name="wBalance"
                                                                            type="number"
                                                                            className="form-control"
                                                                            id="wBalance"
                                                                            placeholder="Wallet Balance"
                                                                            required
                                                                        />
                                                                    </FormGroup>
                                                                </Col>
                                                            </Row>
                                                            <ModalFooter>
                                                                <Button type="button" color="light" onClick={ () => this.setState({ modal_category: false }) }>Calcel</Button>
                                                                <Button type="submit" color="primary">Add</Button>
                                                            </ModalFooter>

                                                        </AvForm>

                                                    </ModalBody>
                                                </Modal>
                                            </TabPane>
                                            <TabPane tabId="4" className="p-3">
                                                <div className="text-right">
                                                    <Link to="#" onClick={ () => this.setState({ modal_subcategory: true, isAlertOpen: false }) } className="btn btn-primary mb-2"><i className="mdi mdi-plus mr-2"></i> Add Sub Category</Link>
                                                </div>
                                                <Row>
                                                    <Col sm="12">
                                                        <MDBDataTable responsive data={ data } className="mt-1" />
                                                    </Col>
                                                </Row>
                                                <Modal
                                                    isOpen={ this.state.modal_subcategory }
                                                    toggle={ this.tog_static }
                                                    backdrop="static"
                                                    centered
                                                    size="lg"
                                                >
                                                    <ModalHeader toggle={ () => this.setState({ modal_subcategory: false }) }>
                                                        Add Sub Category
                                                    </ModalHeader>
                                                    <ModalBody>
                                                        <AvForm onValidSubmit={ this.addCustomer }>
                                                            <Row>
                                                                <Col lg={ 6 }>
                                                                    <FormGroup>
                                                                        <Label htmlFor="subCategoryEn">Sub Category(en)</Label>
                                                                        <AvField
                                                                            name="subCategoryEn"
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="subCategoryEn"
                                                                            placeholder="Enter Sub Category"
                                                                            required
                                                                        />
                                                                    </FormGroup>
                                                                </Col>
                                                                <Col lg={ 6 }>
                                                                    <FormGroup>
                                                                        <Label htmlFor="subCategoryAr">Sub Category(ar)</Label>
                                                                        <AvField
                                                                            name="subCategoryAr"
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="subCategoryAr"
                                                                            placeholder="Enter Sub Category"
                                                                            required
                                                                        />
                                                                    </FormGroup>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg={ 12 }>
                                                                    <Alert color="success" isOpen={ this.state.isAlertOpen } toggle={ () => this.setState({ isAlertOpen: false }) }>
                                                                        Data Added Successfully...!
                                                                     </Alert>
                                                                    <FormGroup className="select2-container">
                                                                        <Label>Category</Label>
                                                                        <Select
                                                                            value={ selectedGroup }
                                                                            onChange={ this.handleSelectGroup }
                                                                            options={ optionGroup }
                                                                            classNamePrefix="select2-selection"
                                                                        />

                                                                    </FormGroup>
                                                                </Col>
                                                            </Row>
                                                            <ModalFooter>
                                                                <Button type="button" color="light" onClick={ () => this.setState({ modal_subcategory: false }) }>Calcel</Button>
                                                                <Button type="submit" color="primary">Add</Button>
                                                            </ModalFooter>

                                                        </AvForm>

                                                    </ModalBody>
                                                </Modal>
                                            </TabPane>
                                            <TabPane tabId="5" className="p-3">
                                                <div className="text-right">
                                                    <Link to="#" onClick={ () => this.setState({ modal_brand: true, isAlertOpen: false }) } className="btn btn-primary mb-2"><i className="mdi mdi-plus mr-2"></i> Add Brand</Link>
                                                </div>
                                                <Row>
                                                    <Col sm="12">
                                                        <div className="table-responsive mt-3">
                                                            <Table className="table-centered datatable dt-responsive nowrap " style={ { borderCollapse: "collapse", borderSpacing: 0, width: "100%" } }>
                                                                <thead className="thead-light">
                                                                    <tr>
                                                                        <th style={ { width: "20px" } }>
                                                                            <div className="custom-control custom-checkbox">
                                                                                <Input type="checkbox" className="custom-control-input" id="customercheck" />
                                                                                <Label className="custom-control-label" htmlFor="customercheck">&nbsp;</Label>
                                                                            </div>
                                                                        </th>
                                                                        <th>Brand En</th>
                                                                        <th>Brand Ar</th>
                                                                        <th>Joining Date</th>
                                                                        <th style={ { width: "120px" } }>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {
                                                                        this.state.brandData.map((brandData, key) =>
                                                                            <tr key={ key }>
                                                                                <td>
                                                                                    <div className="custom-control custom-checkbox">
                                                                                        <Input type="checkbox" className="custom-control-input" id={ "customercheck" + key } />
                                                                                        <Label className="custom-control-label" htmlFor={ "customercheck" + key }>&nbsp;</Label>
                                                                                    </div>
                                                                                </td>

                                                                                <td>{ brandData.brandEn }</td>
                                                                                <td>{ brandData.brandAr }</td>
                                                                                <td>
                                                                                    { brandData.date }
                                                                                </td>
                                                                                <td>
                                                                                    <Link to="#" className="mr-3 text-primary" id={ "edit" + key }><i className="mdi mdi-pencil font-size-18"></i></Link>
                                                                                    <UncontrolledTooltip target={ "edit" + key } placement="top">
                                                                                        Edit
                                                                    </UncontrolledTooltip>
                                                                                    <Link to="#" className="text-danger" id={ "delete" + key }><i className="mdi mdi-trash-can font-size-18"></i></Link>
                                                                                    <UncontrolledTooltip target={ "delete" + key } placement="top">
                                                                                        Delete
                                                                    </UncontrolledTooltip>
                                                                                </td>
                                                                            </tr>
                                                                        )
                                                                    }
                                                                </tbody>
                                                            </Table>
                                                        </div>

                                                    </Col>
                                                </Row>
                                                <Modal
                                                    isOpen={ this.state.modal_brand }
                                                    toggle={ this.tog_static }
                                                    backdrop="static"
                                                    centered
                                                    size="lg"
                                                >
                                                    <ModalHeader toggle={ () => this.setState({ modal_brand: false }) }>
                                                        Add New Brand
                                                    </ModalHeader>
                                                    <ModalBody>
                                                        <AvForm onValidSubmit={ this.addBrand }>
                                                            <Row>
                                                                <Col lg={ 12 }>
                                                                    <Alert color="success" isOpen={ this.state.isAlertOpen } toggle={ () => this.setState({ isAlertOpen: false }) }>
                                                                        Data Added Successfully...!
                                                                     </Alert>
                                                                    <Row>
                                                                        <Col lg={ 6 }>
                                                                            <FormGroup>
                                                                                <Label htmlFor="name">Brand Name(en)</Label>
                                                                                <AvField
                                                                                    name="brandname_en"
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    id="brandname_en"
                                                                                    placeholder="Enter Brand Name"
                                                                                    required
                                                                                />
                                                                            </FormGroup>
                                                                        </Col>
                                                                        <Col lg={ 6 }>
                                                                            <FormGroup>
                                                                                <Label htmlFor="name">Brand Name(ar)</Label>
                                                                                <AvField
                                                                                    name="brandname_ar"
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    id="brandname_ar"
                                                                                    placeholder="Enter Brand Name"
                                                                                    required
                                                                                />
                                                                            </FormGroup>
                                                                        </Col>
                                                                    </Row>
                                                                </Col>
                                                            </Row>

                                                            <ModalFooter>
                                                                <Button type="button" color="light" onClick={ () => this.setState({ modal_brand: false }) }>Calcel</Button>
                                                                <Button type="submit" color="primary">Add</Button>
                                                            </ModalFooter>

                                                        </AvForm>

                                                    </ModalBody>
                                                </Modal>

                                            </TabPane>
                                        </TabContent>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </React.Fragment>
        );
    }
}
const mapStatetoProps = state => {
    return {
       ProductData : state.getPproducts.dataPro
    };
};

export default connect(mapStatetoProps)(Products);

// export default Products;
