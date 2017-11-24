// This file has been automatically generated by writePacketClasses.js

import {UUID} from '../UUID';
import {MessageFlags} from '../../enums/MessageFlags';
import {Packet} from '../Packet';

export class ParcelDisableObjectsPacket implements Packet
{
    name = 'ParcelDisableObjects';
    flags = MessageFlags.Zerocoded | MessageFlags.FrequencyLow;
    id = 4294901961;

    AgentData: {
        AgentID: UUID;
        SessionID: UUID;
    };
    ParcelData: {
        LocalID: number;
        ReturnType: number;
    };
    TaskIDs: {
        TaskID: UUID;
    }[];
    OwnerIDs: {
        OwnerID: UUID;
    }[];

    getSize(): number
    {
        return ((16) * this.TaskIDs.length) + ((16) * this.OwnerIDs.length) + 42;
    }

}