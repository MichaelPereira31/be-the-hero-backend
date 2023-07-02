import { Router } from 'express';

import { CreateEmployeeController } from '../../../../modules/employee/useCases/create/CreateEmployeeController';
import { DeleteEmployeeController } from '../../../../modules/employee/useCases/delete/DeleteEmployeeController';
import { FindByIdEmployeeController } from '../../../../modules/employee/useCases/findById/FindByIdEmployeeController';
import { UpdateEmployeeController } from '../../../../modules/employee/useCases/update/UpdateEmployeeController';

const employeeRoutes = Router();

const findByIdEmployeeController = new FindByIdEmployeeController();
const createEmployeeController = new CreateEmployeeController();
const updateEmployeeController = new UpdateEmployeeController();
const deleteEmployeeController = new DeleteEmployeeController();

employeeRoutes.get('/:id', findByIdEmployeeController.handle);
employeeRoutes.post('/', createEmployeeController.handle);

employeeRoutes.put('/:id', updateEmployeeController.handle);

employeeRoutes.delete('/:id', deleteEmployeeController.handle);

export { employeeRoutes };
