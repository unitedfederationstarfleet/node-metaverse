// This file has been automatically generated by writePacketClasses.js

import {UUID} from '../UUID';
import {MessageFlags} from '../../enums/MessageFlags';
import {Packet} from '../Packet';

export class GroupProfileRequestPacket implements Packet
{
    name = 'GroupProfileRequest';
    flags = MessageFlags.FrequencyLow;
    id = 4294902111;

    AgentData: {
        AgentID: UUID;
        SessionID: UUID;
    };
    GroupData: {
        GroupID: UUID;
    };

    getSize(): number
    {
        return 48;
    }

}