// This file has been automatically generated by writePacketClasses.js

import {UUID} from '../UUID';
import {MessageFlags} from '../../enums/MessageFlags';
import {Packet} from '../Packet';

export class BuyObjectInventoryPacket implements Packet
{
    name = 'BuyObjectInventory';
    flags = MessageFlags.Zerocoded | MessageFlags.FrequencyLow;
    id = 4294901863;

    AgentData: {
        AgentID: UUID;
        SessionID: UUID;
    };
    Data: {
        ObjectID: UUID;
        ItemID: UUID;
        FolderID: UUID;
    };

    getSize(): number
    {
        return 80;
    }

}