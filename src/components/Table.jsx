import React from 'react';

const Table = () => {
    return (
        <div className="main">
        <table className="price-table">
            <tbody>
                <tr>
                    <td className="price-blank"></td>
                    <td className="price-blank"></td>
                    <td className="price-blank"></td>
                </tr>
                <tr className="price-table-head">
                    <td></td>
                    <td>
                        Free
                        <br /><small style={{ fontSize: "12px", fontWeight: "400" }}>Starter plan</small>
                    </td>
                    <td>
                        Personal
                        <br /><small style={{ fontSize: "12px", fontWeight: "400" }}>Longer data retention</small>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td className="price">
                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 128 128">
                            <defs />
                        </svg>
                        <br />Free
                        <br />
                    </td>
                    <td className="price">
                        <br />Package Growth
                        <br />
                    </td>
                </tr>
                <tr>
                    <td><a href="#wordpress-asset-updates" className="price-table-help"></a> Sites</td>
                    <td>1</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td><a href="#wordpress-core-updates" className="price-table-help"></a> Data Retention</td>
                    <td>12</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td><a href="#wordpress-security-monitoring" className="price-table-help"></a> Chart Annotations</td>
                    <td>12</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td><a href="#wordpress-uptime-monitoring" className="price-table-help"></a> Uptime Monitoring</td>
                    <td>12</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td><a href="#wordpress-malware-cleanup" className="price-table-help"></a> Weekly Reports</td>
                    <td>12</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td><a href="#wordpress-security-audit" className="price-table-help"></a> Security Audit</td>
                    <td>12</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td><a href="#wordpress-security-audit" className="price-table-help"></a> On-Demand Audit</td>
                    <td>12</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td><a href="#wordpress-priority-support" className="price-table-help"></a> Priority Support</td>
                    <td>12</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td><a href="#wordpress-billing" className="price-table-help"></a> Easy Billing + No Contracts</td>
                    <td>12</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td></td>
                    <td className="price">
                        <a href="#">Get started</a>
                    </td>
                    <td className="price">
                        <a href="#">Get started</a>
                    </td>
                </tr>
                </tbody>
    </table>
</div>
    );
};

export default Table;