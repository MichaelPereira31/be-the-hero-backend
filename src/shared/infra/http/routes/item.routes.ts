import { Router } from 'express';

import { CreateItemController } from '@modules/item/useCases/create/CreateItemController';
import { DeleteItemController } from '@modules/item/useCases/delete/DeleteItemController';
import { FindByIdItemController } from '@modules/item/useCases/findById/FindByIdItemController';
import { UpdateItemController } from '@modules/item/useCases/update/UpdateItemController';

const itemRoutes = Router();

const findByIdItemController = new FindByIdItemController();
const createItemController = new CreateItemController();
const updateItemController = new UpdateItemController();
const deleteItemController = new DeleteItemController();

itemRoutes.get('/:id', findByIdItemController.handle);
itemRoutes.post('/', createItemController.handle);

itemRoutes.put('/:id', updateItemController.handle);

itemRoutes.delete('/:id', deleteItemController.handle);

export { itemRoutes };
