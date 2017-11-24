// This file has been automatically generated by writePacketClasses.js

import {UUID} from '../UUID';
import {MessageFlags} from '../../enums/MessageFlags';
import {Packet} from '../Packet';

export class AvatarPropertiesReplyPacket implements Packet
{
    name = 'AvatarPropertiesReply';
    flags = MessageFlags.Trusted | MessageFlags.Zerocoded | MessageFlags.FrequencyLow;
    id = 4294901931;

    AgentData: {
        AgentID: UUID;
        AvatarID: UUID;
    };
    PropertiesData: {
        ImageID: UUID;
        FLImageID: UUID;
        PartnerID: UUID;
        AboutText: string;
        FLAboutText: string;
        BornOn: string;
        ProfileURL: string;
        CharterMember: string;
        Flags: number;
    };

    getSize(): number
    {
        return (this.PropertiesData['AboutText'].length + 2 + this.PropertiesData['FLAboutText'].length + 1 + this.PropertiesData['BornOn'].length + 1 + this.PropertiesData['ProfileURL'].length + 1 + this.PropertiesData['CharterMember'].length + 1) + 84;
    }

}